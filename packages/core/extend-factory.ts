export type TMixinInitializer<T extends object = object> = {
  new (...args: any[]): T;
  initializeMethod: string;
};

export type TConstructor<T = object> = new (...args: any[]) => T;

export function ExtendsFactory<Mixins extends Array<unknown>>(...args: Mixins) {
  const mergedExtends: unknown = args.reduce((accum, instance) => {
    const prototype: any = Object.getPrototypeOf(instance);

    return Object.assign(accum, prototype);
  }, {});

  const extender: any = class {
    constructor() {
      this._initializeFactory();
    }

    private _initializeFactory(): void {
      args.forEach((instance) => {
        // ? static property to instance constructor
        const { initializeMethod } = instance.constructor as TMixinInitializer;

        if (initializeMethod) {
          (this as any)[initializeMethod]((instance as any)?.initializeArguments);
        }
      });
    }
  };

  Object.assign(extender.prototype, mergedExtends);

  type TMerge = Mixins['length'] extends 1 ? Mixins[0] : Mixins[0] & Mixins[1];

  return extender as TConstructor<TMerge>;
}

