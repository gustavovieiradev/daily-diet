import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View``;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const BoxAlert = styled.View`
  width: 100%;
  margin-top: 24px;
  border-radius: 8px;
  padding: 20px 16px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  margin-bottom: 40px;
`;

export const TitleAlert = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
  text-align: center;
`;

export const DescriptionAlert = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
`;

export const ButtonAlert = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const TitleList = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  margin-bottom: 10px;
`;

export const GroupHeader = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const GroupItem = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 14px 16px 14px 12px;
  margin-bottom: 12px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GroupItemStart = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GroupHour = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const GroupDivider = styled.View`
  width: 1px;
  height: 14px;
  margin: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const GroupName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const GroupStatus = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.RED_MID};
`;
