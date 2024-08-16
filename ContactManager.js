import React from "react";
import axios from "axios";

class ContactManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            ipName: '',
            ipEmail: '',
            statusMsg: ''
        };
    }

    componentDidMount() {
        this.fetchContacts();
    }

    fetchContacts = () => {
        axios.get("http://localhost:3001/CotactDeatils")
            .then((res) => this.setState({ contacts: res.data }))
            .catch((err) => console.log("Error fetching contacts:", err));
    }

    handleChange = (e, keyword) => {
        if (keyword === "name") {
            this.setState({ ipName: e.target.value });
        } else {
            this.setState({ ipEmail: e.target.value });
        }
    }

    handleSelect = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/CotactDeatils", {
            cname: this.state.ipName,
            cemail: this.state.ipEmail
        })
            .then((res) => {
                this.setState({ statusMsg: "User created" });
                this.fetchContacts();
            })
            .catch((err) => this.setState({ statusMsg: "Try again" }));
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:3001/CotactDeatils/${id}`)
            .then((res) => {
                this.setState({ statusMsg: "User deleted" });
                this.fetchContacts();
            })
            .catch((err) => this.setState({ statusMsg: "Try again" }));
    }

    render() {
        return (
            <>
                <form>
                    Enter name: <input type="text" placeholder="Enter your name" onChange={(e) => this.handleChange(e, "name")} />
                    Enter email: <input type="text" placeholder="Enter your email" onChange={(e) => this.handleChange(e, "email")} />
                    <button onClick={(e) => this.handleSelect(e)}>Submit</button>
                </form>

                <p>{this.state.statusMsg}</p>

                {this.state.contacts.map((item) => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                        <button onClick={() => this.handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </>
        );
    }
}

export default ContactManager;
