import React, { FC, useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../state";
import { IStyledProps } from "../types";

export const FileName: FC<{}> = () => {
  const {
    state: { config, currentDocument },
  } = useContext(MainContext);

  if (!currentDocument || config?.header?.disableFileName) return null;

  let fileName = currentDocument.uri || "";
  const splitURL = fileName.split("/");
  if (splitURL.length) {
    fileName = splitURL[splitURL.length - 1];
  }

  return (
    <Container id="file-name" data-testid="file-name">
      {fileName}
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  text-align: left;
  color: ${(props: IStyledProps) => props.theme.text_primary};
  font-weight: bold;
  margin: 0 10px;
  overflow: hidden;
`;
