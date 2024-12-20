import { useState } from 'react';
import { ApolloProvider, gql, useMutation } from '@apollo/client';
import client from './graphql/client';
import CodeInput from './components/CodeInput';
import AnalysisResults from './components/AnalysisResults';

const ANALYZE_CODE = gql`
  mutation AnalyzeCode($code: String!) {
    analyzeCode(code: $code) {
      result
    }
  }
`;

const App = () => {
  const [code, setCode] = useState('');
  const [analyzeCode] = useMutation(ANALYZE_CODE);

  const handleCodeSubmit = async (code: string) => {
    try {
      const { data } = await analyzeCode({ variables: { code } });
      setCode(data.analyzeCode.result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ApolloProvider client={client}>
      <div className="p-4">
        <CodeInput onCodeSubmit={handleCodeSubmit} />
        <AnalysisResults results={code} />
      </div>
    </ApolloProvider>
  );
};

export default App;
