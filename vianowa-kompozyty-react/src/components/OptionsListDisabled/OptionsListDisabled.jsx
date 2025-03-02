import {
  OptionsListDisabledStyled,
  OptionsListMessage,
} from "./OptionsListDisabled.styled";

export const OptionsListDisabled = () => {
  return (
    <OptionsListDisabledStyled>
      <OptionsListMessage>
        Aby dodać opcje, musisz najpierw dodać beczkę do koszyka!
      </OptionsListMessage>
    </OptionsListDisabledStyled>
  );
};
