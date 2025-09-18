import { gql } from '@apollo/client';

export const CREATE_RESPONSE = gql`
  mutation CreateResponse($form_uuid: ID!, $response: Mixed!) {
    createResponse(input: { form_uuid: $form_uuid, response: $response }) {
      data {
        uuid
        response
        created_at
        updated_at
        form {
          title
          author
        }
      }
      submission_text
    }
  }
`;
