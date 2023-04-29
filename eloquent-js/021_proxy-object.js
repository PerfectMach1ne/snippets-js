const target = {
  message1: "hellloooo",
  message2: "everynyannn", // apparently this ',' isn't illegal
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);

console.log(proxy1.message1)
console.log(proxy1.message2)

const handler2 = {
  get(target, prop, receiver) {
    return "wooooorl!!!11";
  },
};

const proxy2 = new Proxy(target, handler2);

console.log(proxy2.message1)
console.log(proxy2.message2)

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world.";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1)
console.log(proxy3.message2)

{
  const handler = {
    get(obj, prop) {
      return prop in obj ? obj[prop] : 37;
    },
  };

  const p = new Proxy({}, handler);

  p.a = 1;
  p.b = undefined;

  console.log(p.a, p.b) // -> 1 undefined

  console.log("c" in p, p.c) // -> false 37
}

{
  // In this example, we are using a 
  // native JavaScript object to which our proxy will forward all operations 
  // that are applied to it.
  // 
  // it does not work for native objects, such as DOM elements, Map objects
  const target = {};
  const p = new Proxy(target, {});

  p.a = 37; // Operation forwarded to the target

  console.log(target.a); // 37 (The operation has been properly forwarded!)
}

{
  /* A proxy is still another object with a different identity — it's a
   proxy that operates between the wrapped object and the outside. As such,
   the proxy does not have direct access to the original object's private
   properties. */
  class Secret {
    #secret;
    
    constructor(secret) {
      this.#secret = secret;
    }
    
    get secret() {
      return this.#secret.replace(/\d+/, "[REDACTED]");
    }
  }

  const aSecret = new Secret("1234567");

  console.log(aSecret.secret); // [REDACTED]

  const proxy = new Proxy(aSecret, {});
  // "TypeError: Cannot read private member" error speedrun anypercent
  // console.log(proxy.secret);
  // "To fix this, use hte original 'secret' as 'this'"
  const proxier = new Proxy(aSecret, {
    get(target, prop, receiver) {
      return target[prop];
    },
  });
  console.log(proxier.secret);
}
