import Wrapper from '@/components/Wrapper';
import { useAuth } from '@/contexts/AuthContext';
import { useGlobal } from '@/contexts/GlobalContext';
import { router } from 'expo-router';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';


export default function HomeScreen() {
  
  const { logout } = useAuth()
  const {toSignup} = useGlobal()

  const handleLogout = () => {
    router.push('/login')
    logout()
  }


  return (
    <SafeAreaView>
      <Wrapper >
        <Text>Hello</Text>

        <Button title='logout' onPress={handleLogout}/>

        <Button title='signup' onPress={toSignup}/>
        
        <Button title='lang' onPress={()=>router.push('/language-mode')}/>
        <Button title='aavater' onPress={()=>router.push('/avater-onboarding')}/>

      </Wrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
