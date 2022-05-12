import {useRandomQoutes} from './customQueryHooks/useQoutes';
import {GlobalStyle, AppWrapper, Section} from './styles/style';

function App() {

  const onSuccess = () => {
    console.log('Seccess');
  }
  const onError = () => {
    console.log('Error');
  }
  const {isError, data,error, refetch} = useRandomQoutes(onSuccess, onError);

  if(isError){
    return <h2>{error.message}</h2>
  }
  return (
    <>
    <GlobalStyle/>
    <AppWrapper>
    <Section>
    <h1>{data}</h1>
    <button onClick={refetch} >Give me adive</button>
    </Section>
    </AppWrapper>
    </>
  );
}

export default App;
