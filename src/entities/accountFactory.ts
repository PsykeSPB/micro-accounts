import Account from "./account";

export default class AccountFactory {
  readonly generateID: () => string;

  constructor(generateID: () => string) {
    this.generateID = generateID;
  }

  public create({ ...args }) {
    let { id, name, description, ancestor } = args;

    if (!id) {
      id = this.generateID();
    }

    const result = new Account(id, name, description);

    if (ancestor) {
      if (!(ancestor instanceof Account))
        throw new Error("Account 'ancestor' must be an instance of Account");

      result.setAncestor(ancestor);
    }

    return result;
  }
}
