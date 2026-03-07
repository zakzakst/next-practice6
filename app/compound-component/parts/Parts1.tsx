"use client";

import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className="border rounded p-4 space-y-2">{children}</div>;
};

type CardHeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: CardHeaderProps) => {
  return <div className="font-bold">{children}</div>;
};

type CardBodyProps = {
  children: ReactNode;
};

export const Body = ({ children }: CardBodyProps) => {
  return <div>{children}</div>;
};

type CardFooterProps = {
  children: ReactNode;
};

export const Footer = ({ children }: CardFooterProps) => {
  return <div className="text-sm text-gray-500">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export const Parts = () => {
  return (
    <Card>
      <Card.Header>タイトル</Card.Header>
      <Card.Body>本文</Card.Body>
      <Card.Footer>フッター</Card.Footer>
    </Card>
  );
};
