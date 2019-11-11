export default class Account {
  protected _id: string;
  protected _name: string;
  protected _description: string;
  protected _ancestor: Account;

  public constructor(id: string, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get ancestor(): Account {
    return this._ancestor;
  }

  /**
   * Returns ancestral branch of Accounts from current to top one.
   *
   * @returns Flat array of all ancestral Accounts.
   */
  get allAncestors(): Array<Account> {
    return this.ancestor ? [...this.ancestor.allAncestors, this] : [this];
  }

  /**
   * Sets curent Account's ancestor if it's possible.
   *
   * @param target Account to be set as an ancestor to current one.
   * @throws Error if target has current Account as ancestor, even recursevly.
   */
  public setAncestor(target: Account): void {
    const targetBrachIds = target.allAncestors.map(account => account.id);
    if (targetBrachIds.includes(this.id)) {
      throw new Error("Circular inheritance forbiden in account");
    } else {
      this._ancestor = target;
    }
  }
}
