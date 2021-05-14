import { VercelRequest, VercelResponse } from '@vercel/node';
import { AC, Lists } from '../../../services';

const LeadSignUp = async (req: VercelRequest, res: VercelResponse) => {
  if (!req.body.email || !req.body.firstName) {
    res.status(400).json({
      status: 400,
      errors: [{ title: 'Please provide a valid Email address and a name.' }]
    });
  }

  try {
    /* Add account to AC */
    const account = await AC.createAccount(req.body.organization);
    try {
      /* Add contact to AC */
      const contact = await AC.createContact(req.body);
      try {
        /* Add AC contact to AC account */
        await AC.linkContactToAccount(contact.contact.id, account.account.id);
      } catch (error) {
        /* Linking AC contact to AC account failed */
        res.status(error.response.status).json({
          status: error.response.status,
          errors: error.response.data.errors
        });
      }
      try {
        /* Add created contact to list */
        await AC.addContactToList(contact.contact.id, Lists.SALES_LEADS);
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

export default LeadSignUp;
