import React from "react";
import styled, { useTheme } from "styled-components";
import { ContactInfo, FooterLinks } from "../constants";
import { BiCaretDownSquare, BiCaretUpSquare } from "react-icons/bi";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.s28};
  color: ${({ theme }) => theme.palette.text.primary};
  width: 90%;
  margin: auto;
  & > div {
    flex: 3;
  }
`;

const ColumnWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  padding-right: ${({ theme }) => theme.spacing.s24};
  input {
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    margin-bottom: ${({ theme }) => theme.spacing.s8};
    &:placeholder {
      font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
    }
  }
  &::after {
    content: "";
    display: block;
    padding-right: ${({ theme }) => theme.spacing.s2};
    background-color: ${({ theme }) => theme.palette.background.default};
    position: absolute;
    right: ${({ theme }) => theme.spacing.s0};
    top: 15%;
    bottom: 15%;
  }
  &:first-child {
    padding-left: ${({ theme }) => theme.spacing.s0};
  }
  &:last-child {
    margin-left: ${({ theme }) => theme.spacing.s24};
  }
  &:last-child::after {
    display: none;
  }
`;
const LogoWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.s0};
  font-size: ${({ theme }) => theme.typography.fontSize.f36};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  color: ${({ theme }) => theme.palette.text.white};
`;

const ColumnTitle = styled.h4`
  border-bottom: 2px solid ${({ theme }) => theme.palette.background.default};
  display: inline-block;
  color: ${({ theme }) => theme.palette.text.white};
  margin: ${({ theme }) => theme.spacing.s0};
  padding-right: ${({ theme }) => theme.spacing.s8};
`;

const LinkItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${({ theme }) => theme.spacing.s8};
  height: ${({ theme }) => theme.sizing.s24};
  color: ${({ theme }) => theme.palette.text.white};
  .up {
    display: none;
  }
  .up,
  .down {
    font-size: ${({ theme }) => theme.typography.fontSize.f20};
    color: ${({ theme }) => theme.palette.text.white};
  }
  & > a {
    border-bottom: 1px solid transparent;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.white};
    & > a {
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
    .up {
      display: block;
    }
    .down {
      display: none;
    }
  }
  &:hover ul {
    display: block;
  }
`;

const SubLinkWrapper = styled.ul`
  display: none;
  width: max-content;
  background-color: ${({ theme }) => theme.palette.background.default};
  position: absolute;
  right: ${({ theme }) => theme.spacing.s0};
  top: 100%;
  z-index: 99;
  padding: ${({ theme }) => theme.spacing.s8}
    ${({ theme }) => theme.spacing.s12};
  border-radius: ${({ theme }) => theme.borderRadius.container};
  li {
    height: ${({ theme }) => theme.sizing.s30};
    color: ${({ theme }) => theme.palette.text.primary};
    & > a {
      font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    }
    &:hover {
      color: ${({ theme }) => theme.palette.text.black};
      a {
        font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
        border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
      }
    }
    &:hover ul {
      display: block;
    }
  }
`;

function Footer() {
  const theme = useTheme();
  return (
    <div
      style={{
        background: theme.palette.info.main,
        marginTop: theme.spacing.s48,
        borderRadius: theme.borderRadius.container,
        padding: `${theme.spacing.s52} ${theme.spacing.s0}`,
      }}
    >
      <Wrapper>
        <ColumnWrapper>
          <LogoWrapper>CCIB</LogoWrapper>
          <div>
            <p
              style={{
                color: theme.palette.text.white,
                margin: `${theme.spacing.s16} ${theme.spacing.s0}`,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus alias assumenda nobis.
            </p>
            <div>
              {ContactInfo &&
                ContactInfo.map((item, i) => (
                  <p
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: theme.spacing.s8,
                      height: theme.spacing.s32,
                      color: theme.palette.text.white,
                    }}
                  >
                    {item.icon} <span>{item.value}</span>
                  </p>
                ))}
            </div>
          </div>
        </ColumnWrapper>

        {FooterLinks &&
          FooterLinks.map((item, i) => (
            <ColumnWrapper key={i}>
              <ColumnTitle style={{}}>{item.title}</ColumnTitle>
              <ul
                style={{ gap: theme.spacing.s8, marginTop: theme.spacing.s24 }}
              >
                {item.links &&
                  item.links.map((link, j) => (
                    <LinkItem key={j}>
                      <Link
                        href={link.link}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {link.title}
                      </Link>
                      {link.sublinks && (
                        <>
                          <BiCaretUpSquare className="up" />
                          <BiCaretDownSquare className="down" />
                        </>
                      )}
                      {link.sublinks && (
                        <SubLinkWrapper className="shadow-md" key={i}>
                          {link.sublinks.map((sublink, i) => (
                            <li>
                              <Link
                                href={sublink.link}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                {sublink.title}
                              </Link>
                            </li>
                          ))}
                        </SubLinkWrapper>
                      )}
                    </LinkItem>
                  ))}
              </ul>
            </ColumnWrapper>
          ))}
        <ColumnWrapper
          style={{
            backgroundColor: theme.palette.background.dark,
            borderRadius: theme.borderRadius.container,
            padding: `${theme.spacing.s32} ${theme.spacing.s16}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>Subscribe to our newsletter</h2>
          <p style={{ marginBottom: theme.spacing.s16 }}>
            Get News Updates to your inbox
          </p>
          {/* <form action="" style={{ width: "80%" }}>
            <InputField
              name={"username"}
              placeholder={"Name"}
              type={"text"}
              required
              editable
            />
            <InputField
              name={"email"}
              placeholder={"Email"}
              type={"email"}
              required
              editable
            />
            <Button
              text={"Get Updates"}
              style={{
                width: "100%",
                fontSize: theme.typography.fontSize.f16,
                padding: `${theme.spacing.s16} ${theme.spacing.s16}`,
              }}
            />
          </form> */}
        </ColumnWrapper>
      </Wrapper>
    </div>
  );
}

export default Footer;
