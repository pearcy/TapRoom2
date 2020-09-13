import styled from "styled-components"
import tw from "twin.macro"

const StyledContainer = styled.main.attrs( {
  className: "bg-gray-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between h-16",
    })`
      & {
        
        header {
        ${tw`bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
        }

        keglist {
        ${tw`bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
        }

        pourForm {
        ${tw`flex-auto content-center bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
          }

        pourButton {
          ${tw`bg-yellow-500 hover:bg-yellow-200 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
        }

        /* pourButton {
          ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-1`}
        } */

      
        /* form {
        ${tw`flex content-center text-center bg-white text-center rounded py-8 px-5 shadow max-w-md`}
          } */

        form {
        ${tw`flex-auto content-center bg-white shadow max-w-xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-4xl font-bold leading-tight text-gray-900`}
          }

        button {
          ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
        }




        
      
      }
    `

export default StyledContainer


