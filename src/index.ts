import { AccountFactory } from "./entities";

const a = AccountFactory.create({ id: "a" });
const b = AccountFactory.create({ id: "b", ancestor: a });
const c = AccountFactory.create({ id: "c", ancestor: b });
const d = AccountFactory.create({ id: "d", ancestor: c });
const e = AccountFactory.create({ id: "e", ancestor: d });

console.log(e.allAncestors);

d.setAncestor(a);

console.log(e.allAncestors);
