export interface IStateController<
  Db extends object = null,
>{
  getDb(): Db
}

export type TStateConstructors<
  Db extends object = null,
> = {
  db?: Db;
};

class StateController <
  Db extends object = null,
> implements IStateController<Db>
{
  constructor(private _db: Db = null) {
  }
  public getDb(): Db {
    return this._db;
  }
}

export function State<
  Db extends object = null,
>({ db }: TStateConstructors<Db>): IStateController<Db> {
  return new StateController(db);
}
