import axios from 'axios';
// import Joi from 'joi'

// const schema = Joi.object({
//   email: Joi.email(),
//   firstName: Joi.string()
// })

const NewsletterSignUp = async (req, res) => {
  if (!req.body.email || !req.body.firstName) {
    res.status(400).json({
      status: 400,
      errors: [{ title: 'Please provide a valid Email address and a name.' }]
    });
  }

  try {
    /* Add contact to AC */
    const user = await createContact(req.body.email, req.body.firstName);
    try {
      /* Add created contact to newsletter list */
      await addContactToNewsletter(user);
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
};

/**
 * @description Adds a Contact to AC
 * @param {string} email
 * @param {string} firstName
 * @returns AC Contact
 */
const createContact = async (email, firstName) => {
  const config = {
    headers: {
      Accept: 'application/json',
      'Api-Token': process.env.AC_API_TOKEN
    },
    method: 'POST',
    data: {
      contact: {
        email,
        firstName
      }
    }
  };

  try {
    const { data: user } = await axios(
      `${process.env.AC_BASE_URL}/contacts`,
      config
    );
    return user;
  } catch (error) {
    throw error;
  }
};

/**
 * @description Adds AC Contact to newsletter list
 * @param {AC user} user
 */
const addContactToNewsletter = async user => {
  const NEWSLETTER_ID = 3;

  const config = {
    headers: {
      Accept: 'application/json',
      'Api-Token': process.env.AC_API_TOKEN
    },
    method: 'POST',
    data: {
      contactList: {
        list: NEWSLETTER_ID,
        contact: user.contact.id,
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

export default NewsletterSignUp;
