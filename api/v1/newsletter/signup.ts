import { VercelRequest, VercelResponse } from '@vercel/node';
import { AC, Lists } from '../../../services';

const NewsletterSignUp = async (req: VercelRequest, res: VercelResponse) => {
  if (!req.body.email || !req.body.firstName) {
    res.status(400).json({
      status: 400,
      errors: [{ title: 'Please provide a valid Email address and a name.' }]
    });
  }

  try {
    /* Add contact to AC */
    const contact = await AC.createContact({
      email: req.body.email,
      firstName: req.body.firstName
    });
    try {
      /* Add created contact to newsletter list */
      await AC.addContactToList(contact.contact.id, Lists.NEWSLETTER);
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

export default NewsletterSignUp;
