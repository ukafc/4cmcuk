import axios from 'axios'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  }

  handleChanges = (event) => {
    let id = event.target.id;
    let val = event.target.value;
    this.setState({[id]: val});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let email = this.state.email;
    if (!email) {
      alert("您需要输入邮箱！ Your must enter an email!");
    }
    
    const { name, email, phone, subject, message } = this.state;

    axios.post('/', { name, email, phone, subject, message })
      .then((result) => {
        //access the results here....
      });

  }

  render () {
    return (
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="name" type="text" placeholder="在此输入您的名字" onChange={this.handleChanges}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email* (必填)
          </label>
          <input className="appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" type="email" placeholder="youremail@example.com" onChange={this.handleChanges}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input className="appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="phone" type="tel" placeholder="电话" onChange={this.handleChanges}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Subject
          </label>
          <input className="appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="subject" type="text" placeholder="主题" onChange={this.handleChanges}
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Messages 
          </label>
          <textarea className="appearance-none border border-teal-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="message" type="text" placeholder="请填写正文" onChange={this.handleChanges}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-afc hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" 
            type="submit"
          >
            发送 Send
          </button>
        </div>
      </form>
    )
  }
}

export default ContactForm