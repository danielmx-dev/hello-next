import Link from 'next/link';
import Router from 'next/router'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Component from "@reactions/component";

const SearchBar = ({
  query,
}) => (
  <Component
    initialState={{ query }}
  >
    {
      ({
        setState,
        state,
      }) => {
        const doSearch = e => {
          e.preventDefault()
          Router.push(`/?q=${state.query}`)
        }
        return (
          <Form onSubmit={doSearch} inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="q" className="mr-sm-2">Search</Label>
              <Input
                type="text"
                name="q"
                id="q"
                placeholder="Enter the show name"
                value={state.query}
                onChange={e => setState({ query: e.target.value })}
              />
            </FormGroup>
            <Button onClick={doSearch}>Submit</Button>
          </Form>
        )
      }
    }
  </Component>
)

export default SearchBar