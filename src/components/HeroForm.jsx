import { useState } from 'react'

export default function HeroForm({ submitHandler, initialForm }) {
  const [form, setForm] = useState(initialForm)
  return (
    <form onSubmit={e => submitHandler(e, form, setForm)}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <label htmlFor="power">power:</label>
      <input
        type="text"
        id="power"
        value={form.power}
        onChange={e => setForm({ ...form, power: e.target.value })}
      />
      <label htmlFor="age">age:</label>
      <input
        type="number"
        id="age"
        value={form.age}
        onChange={e => setForm({ ...form, age: e.target.value })}
      />
      <button type="submit">Create</button>
    </form>
  )
}
