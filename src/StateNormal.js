import {useState} from 'react';

export default function StateNormal() {

  const [form, setForm] = useState({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '漆原町'
    }
  })

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleFormNest = (e) => {
    setForm({
      ...form,
      address: {
        ...form.address,
        [e.target.name]: e.target.value
      }
    })
  }

  const show = () => {
    console.log(`${form.name} (${form.address.prefecture}・${form.address.city})`);
  }

  return (
    <form className='form'>
      <h2>useState</h2>
      <div>
        <label>
          名前
          <input name="name" type="text" onChange={handleForm} value={form.name} />
        </label>
      </div>
      <div>
        <label>
          都道府県
          <input name="prefecture" type="text" onChange={handleFormNest} value={form.address.prefecture} />
        </label>
      </div>
      <div>
        <label>
          市区町村
          <input name="city" type="text" onChange={handleFormNest} value={form.address.city} />
        </label>
      </div>
      <button type="button" onClick={show}>Show Console</button>
    </form>
  )
}