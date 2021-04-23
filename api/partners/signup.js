import axios from 'axios';
// import Joi from 'joi'

// const schema = Joi.object({
//   email: Joi.email(),
//   firstName: Joi.string(),
//   lastName: Joi.string(),
//   organization: Joi.string(),
//   phone: Joi.string(),
//   message: Joi.string(),
// })

const PartnerSignUp = async (req, res) => {
  if (!req.body.email || !req.body.firstName) {
    res.status(400).json({
      status: 400,
      errors: [{ title: 'Please provide a valid Email address and a name.' }]
    });
  }

  const PARTNER_LEADS_LIST_ID = 4;

  try {
    /* Add account to AC */
    const account = await createAccount(req.body.organization);
    try {
      /* Add contact to AC */
      const contact = await createContact(req.body);
      try {
        /* Add AC contact to AC account */
        await linkContactToAccount(contact.contact.id, account.account.id);
      } catch (error) {
        /* Linking AC contact to AC account failed */
        res.status(error.response.status).json({
          status: error.response.status,
          errors: error.response.data.errors
        });
      }
      try {
        /* Add created contact to list */
        await addContactToList(contact.contact.id, PARTNER_LEADS_LIST_ID);
        res.status(200).json({
          status: 200,
          message: `${req.body.email} has been successfully added to the newsletter.`
        });
      } catch (error) {
        /* Adding to newsletter list failed */
        res.status(error.response.status).json({
          status: error.response.status,
          errors: error.response.data.errors
        });
      }
    } catch (error) {
      /* Adding contact to AC failed */
      res.status(error.response.status).json({
        status: error.response.status,
        errors: error.response.data.errors
      });
    }
  } catch (error) {
    /* Adding an account to AC failed */
    res.status(error.response.status).json({
      status: error.response.status,
      errors: error.response.data.errors
    });
  }
};

/**
 * @description Adds an Account to AC
 * @param {string} organizationName
 * @returns AC Account
 */
const createAccount = async organizationName => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Api-Token': process.env.AC_API_TOKEN
    },
    method: 'POST',
    data: {
      account: {
        name: organizationName
      }
    }
  };

  try {
    const { data: account } = await axios(
      `${process.env.AC_BASE_URL}/accounts`,
      config
    );
    return account;
  } catch (error) {
    throw error;
  }
};

/**
 * @description Adds a Contact to AC
 * @param {object} info
 * @returns AC Contact
 */
const createContact = async info => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Api-Token': process.env.AC_API_TOKEN
    },
    method: 'POST',
    data: {
      contact: {
        email: info.email,
        firstName: info.firstName,
        lastName: info.lastName,
        phone: info.phone
      },
      fieldValues: [
        {
          field: '1',
          value: info.organization
        },
        {
          field: '2',
          value: info.message
        }
      ]
    }
  };

  try {
    const { data: contact } = await axios(
      `${process.env.AC_BASE_URL}/contacts`,
      config
    );
    return contact;
  } catch (error) {
    throw error;
  }
};

/**
 * @description Links AC Contact to AC account
 * @param {number} contactId
 * @param {number} accountId
 */
const linkContactToAccount = async (contactId, accountId) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Api-Token': process.env.AC_API_TOKEN
    },
    method: 'POST',
    data: {
      accountContact: {
        contact: contactId,
        account: accountId,
        status: 1 // subscribe
      }
    }
  };

  try {
    const res = await axios(
      `${process.env.AC_BASE_URL}/accountContacts`,
      config
    );
    return res;
  } catch (error) {
    throw error;
  }
};

/**
 * @description Adds AC Contact to newsletter list
 * @param {number} listId
 * @param {number} contactId
 */
const addContactToList = async (contactId, listId) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Api-Token': process.env.AC_API_TOKEN
    },
    method: 'POST',
    data: {
      contactList: {
        list: listId,
        contact: contactId,
        status: 1 // subscribe
      }
    }
  };

  try {
    const res = await axios(`${process.env.AC_BASE_URL}/contactLists`, config);
    return res;
  } catch (error) {
    throw error;
  }
};

export default PartnerSignUp;
