import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px 40px;

  .Header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 1em 0 0.2em 0;
    border-bottom: 1px solid rgba(29, 100, 203, 0.1);

    h2 {
      font-size: 28px;
      font-weight: 700;
    }

    button {
      font-size: 13px;
      font-weight: 600;
      font-family: "Source Code Pro";
      padding: 0 1em;
      border: none;
      border-radius: 10px;
      color: #fff;
      background-color: var(--blue-color);
    }
  }

  .Groups {
    display: flex;
    justify-content: space-between;
    .GroupsList {
      width: 35%;
      margin-right: 50px;

      .SearchField {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        height: 36px;
        display: flex;
        align-items: center;

        input {
          width: 92%;
          padding: 0 10px;
        }

        input,
        button {
          height: 34px;
          border: none;
          background-color: #fff;
        }

        button {
          border-left: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0 5px;

          svg {
            transform: translateY(2px);
          }
        }
      }

      .List {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        margin-top: 10px;
        border: 2px solid rgba(29, 100, 203, 0.05);
        box-shadow: 0px 4px 4px rgba(29, 100, 203, 0.2);

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
          cursor: pointer;
          transform: translateZ(50px);
          transform: translateX(2px);
        }
      }
    }

    .GroupDetails {
      width: 60%;
    }
  }
`;
