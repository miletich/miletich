import { Text, View } from '@react-pdf/renderer';
import Logo from './components/Logo';
import { infoStyles } from './styles';

export default function Info(): JSX.Element {
  return (
    <View style={infoStyles.wrapper}>
      <Logo />
      <Text style={infoStyles.name}>Miletić Dušan</Text>
      <Text style={infoStyles.title}>Frontend Developer</Text>
      <Text>d@miletich.cc</Text>
      <Text>github.com/miletich</Text>
      <Text>linkedin.com/in/miletich</Text>
    </View>
  );
}
