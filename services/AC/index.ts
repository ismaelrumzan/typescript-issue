import axios, { AxiosRequestConfig } from 'axios';

export interface Contact {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

/**
 * @description List IDs of AC lists
 */
export const Lists = {
  MAIN_CONTACTS: 1,
  SALES_LEADS: 2,
  NEWSLETTER: 3,
  PARTNER_LEADS: 4,
  EMPLOYEES: 5
};

/**
 * ActiveCampaign helper class
 */
export class AC {
  /**
   * @description Adds an Account to AC
   * @returns AC Account
   */
  static async createAccount(organizationName: string) {
    const config: AxiosRequestConfig = {
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
  }

  /**
   * @description Adds a Contact to AC
   * @returns AC Contact
   */
  static async createContact(contact: Contact) {
    const config: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
        'Api-Token': process.env.AC_API_TOKEN
      },
      method: 'POST',
      data: {
        contact: {
          email: contact.email,
          firstName: contact.firstName,
          lastName: contact.lastName,
          phone: contact.phone
        }
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
  }

  /**
   * @description Links AC Contact to AC account
   */
  static async linkContactToAccount(contactId: number, accountId: number) {
    const config: AxiosRequestConfig = {
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
  }

  /**
   * @description Adds AC Contact to newsletter list
   */
  static async addContactToList(contactId: number, listId: number) {
    const config: AxiosRequestConfig = {
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
      const res = await axios(
        `${process.env.AC_BASE_URL}/contactLists`,
        config
      );
      return res;
    } catch (error) {
      throw error;
    }
  }
}
