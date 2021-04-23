import axios from 'axios';

const NewsletterSignUp = async (req, res) => {
  const AC_BASE_URL = 'https://digital-hotel.api-us1.com/api/3';
  const AC_API_TOKEN =
    '87eee55d4688a36a85ffb922ddf72c5bf8754ac917a18e821e749a25f52d38e5892a492a';
  const NEWSLETTER_ID = 3;

  /**
   * Create AC Account
   */
  let config = {
    headers: {
      Accept: 'application/json',
      'Api-Token': AC_API_TOKEN
    },
    method: 'POST',
    data: {
      contact: {
        email: req.query.email
      }
    }
  };

  try {
    const { data: user } = await axios(`${AC_BASE_URL}/contacts`, config);

    /**
     * Add Account to Newsletter List
     */
    let newsletterConfig = {
      headers: {
        Accept: 'application/json',
        'Api-Token': AC_API_TOKEN
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
      await axios(`${AC_BASE_URL}/contactLists`, newsletterConfig);
      res.status(200).json({
        status: 200,
        message: `${req.query.email} has been successfully added to the newsletter.`
      });
    } catch (error) {
      res.status(error.response.status).json({
        status: error.response.status,
        errors: error.response.data.errors
      });
    }
  } catch (error) {
    res.status(error.response.status).json({
      status: error.response.status,
      errors: error.response.data.errors
    });
  }
};

export default NewsletterSignUp;
