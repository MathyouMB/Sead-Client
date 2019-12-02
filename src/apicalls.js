import { gql } from "apollo-boost";
export const USERS = gql`
{
    users{
      id
      username
      email
      notes{
        id
        title
        text
      }
    }
  }
`;

export const USER = gql`
query user($id: ID!){
  user(id: $id) {
    id
    username
    email
    notes{
      id
      title
      text
    }
  }
}
`;

export const NOTE = gql`
query note($id: ID!){
  note(id: $id) {
    id
    title
    text
  }
}
`;

export const LOGIN = gql`
query login($email: String!, $password: String!){
  login(email: $email, password: $password) {
    id
    username
    email
    notes{
      id
      title
      text
    }
  }
}
`;