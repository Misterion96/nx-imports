import { Type } from '@angular/core';

export interface IStateController<
  F extends Type<F> = null,
  S extends Type<S> = null,
  Db extends object = null,
>{
  getFlags(): F
  getState(): S
  getDb(): Db
}

export type TStateConstructors<
  F extends Type<F> = null,
  S extends Type<S> = null,
  Db extends object = null,
> = {
  flags?: F;
  state?: S;
  db?: Db;
};

class StateController <
  F extends Type<F> = null,
  S extends Type<S> = null,
  Db extends object = null,
> implements IStateController<F, S, Db>
{
  constructor(private _flags: F = null, private _state: S = null, private _db: Db = null) {
  }

  public getFlags(): F {
    return this._flags
  }

  public getDb(): Db {
    return this._db;
  }

  public getState(): S {
    return this._state;
  }
}

export function State<
  F extends Type<F> = null,
  S extends Type<S> = null,
  Db extends object = null,
>({ flags, state, db }: TStateConstructors<F, S, Db>): IStateController<F, S, Db> {
  return new StateController(flags, state, db);
}
