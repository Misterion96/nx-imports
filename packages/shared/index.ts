import { ExtendsFactory, State } from '@my-lib2/core';
import { DB } from '@my-lib2/db';


export class DataService extends ExtendsFactory(
  State({
    db: DB
  })
){}
