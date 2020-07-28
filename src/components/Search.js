import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Search = () => {
    const [text, setText] = useState('');
    return (
        <Form className="form">
            <FormControl type="text" placeholder="Search" className="form-control"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <Button
                className="btn" variant="outline-success">Search</Button>
        </Form>
    )
}

export default Search
