const root = {
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{ count }}</button>`
}

export {
  root
}