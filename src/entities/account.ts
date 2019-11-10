export class AccountFactory {
  readonly generateID: () => string;

  constructor(generateID: () => string) {
    this.generateID = generateID;
  }

  public create({ ...args }) {
    let { id, name, description, ancestor, descendants } = args;

    if (!id) {
      id = this.generateID();
    }

    if (ancestor) {
      if (!(ancestor instanceof Account))
        throw new Error("Account 'ancestor' must be an instance of Account");
    } else {
      ancestor = undefined;
    }

    if (descendants) {
      if (!(descendants instanceof Array))
        throw new Error("Account 'descendants' must be an Array");

      if (!descendants.every(descendant => descendant instanceof Account))
        throw new Error(
          "Every Account 'descendant' must be an instance of Account"
        );
    } else {
      descendants = [];
    }

    return new Account(id, name, description, ancestor, descendants);
  }
}

export class Account {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly ancestor: Account;
  readonly descendants: Array<Account>;

  public constructor(
    id: string,
    name: string,
    description: string,
    ancestor: Account,
    descendants: Array<Account>
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ancestor = ancestor;
    this.descendants = descendants;
  }
}
