import { useImmer } from "use-immer"


function StateImmer() {

  const [form, setForm] = useImmer({
    name: '山田太郎',
    address: {
      prefecture: '広島県',
      city: '漆原町'
    }
  })

  const handleForm = (e) => {
    setForm((form) => {
      form[e.target.name] = e.target.value
    })
  }

  const handleFormNest = (e) => {
    setForm((form) => {
      form.address[e.target.name] = e.target.value
    })
  }

  const show = () => {
    console.log(`${form.name} (${form.address.prefecture}・${form.address.city})`);
  }

  return (
    <form className='form'>
      <h2>useImmer</h2>
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

export default StateImmer;
