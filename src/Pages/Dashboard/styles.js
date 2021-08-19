import styled, { keyframes }from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 260,
    height: 80,
    paddingTop: 15,
    background:
      'linear-gradient(180deg, #1D64CB 0%, rgba(116, 29, 203, 0.57) 100%);',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.3);',
    textAlign: 'center',
  },
  input: {
    display: 'block',
    width: '80%',
    height: 25,
    margin: ['0 auto'],
    paddingLeft: 10,
    border: 'none',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    height: 25,
    fontSize: 13,
    padding: ['0 0.5em'],
    marginTop: 5,
    textTransform: 'uppercase',
    fontFamily: 'Source Code Pro',
    border: 'none',
    borderRadius: 5,
    color: 'var(--white-color)',
    backgroundColor: 'var(--blue-color)',
    '&:hover': {
      background: 'darkblue',
   },
   '&:active': {
    background: 'rgba(0,0,139, 0.8)',
 }
    
  },

 
}));



export const Containter = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-bottom: 20px;

  .Header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding: 2.5em 0 0.2em 0;
    border-bottom: 1px solid rgba(29, 100, 203, 0.1);

    .UserInfos {
      margin-top:20px;
      span {
        display: block;
        font-family: "Source Code Pro";
        margin-right: 10px;
        color: #fff;
        
        strong {
          text-transform: capitalize;
          font-size: 20px;
        }
      }
    }

    .BtnEdit {
      button {
        background-color: transparent;
        color: #fff;
        border: none;

        svg {
          margin-top:20px;
          font-size: 20px;
          transform: translateY(5px);
        }

        svg:hover{
          color:green;
        }

        svg:active{
          color:darkgreen;
        }
      }
    }

    .Email {
      font-size: 1rem;
      align-self: flex-start;
    }
  }
  .theme {
    display: flex;
    justify-content: space-between;
  }

  .Groups {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;

    .GroupsList {
      width: 100%;
      background-color: var(--blue-color);
      border: 2px solid rgba(29, 100, 203, 0.1);
      box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.57);
      text-align: center;
      padding-top: 15px;
      margin-top: 30px;

      .List {
        width: 100%;
        max-height: 390px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;

        .HeaderGroup {
          display: flex;
          align-items: center;

          h4 {
            font-family: "Source Sans Pro";
            font-size: 18px;
          }
          span {
            color: var(--gray-details);
            font-size: 14px;
            margin-left: 10px;
          }
        }

        .InfosGroup {
          color: var(--gray-details);
          font-size: 12px;
          margin-top: 5px;

          span + span {
            margin-left: 15px;
          }
        }

        .BtnToDetails {
          button {
            border: none;

            svg {
              font-size: 12px;
            }
          }
        }

        &:hover {
          transform: translateZ(50px);
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .Header {
      .UserInfos {
        padding: 0 0.5em;
        margin-top:0px;
        span {
          display: inline-block;
          color: #000;
          strong {
            text-transform: capitalize;
            font-size: 25px;
          }
        }
      }
      .BtnEdit {
        button {
          color: #000;

          svg {
            color:var(--blue-color);
            margin-top:0px;
            font-size: 20px;
            transform: translateY(5px);
          }
        }
      }
    }

    .Groups {
      flex-direction: row;
      flex-wrap: nowrap;

      .GroupsList {
        width: 50%;
        margin-right: 50px;
        margin-top: 0;
        background-color: transparent;

        .List {
          width: 100%;
          background-color: transparent;
          margin-top: 0px;
          box-shadow: 0px 4px 4px rgba(116, 29, 203, .57);
        }
      }
    }
  }
`;
