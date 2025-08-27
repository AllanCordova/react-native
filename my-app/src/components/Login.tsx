import { Button, TextInput, View } from "react-native";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(`${userName} ${password}`);
  };

  return (
    <View>
      <TextInput onChangeText={setUserName} value={userName} />
      <TextInput onChangeText={setPassword} value={password} secureTextEntry />
      <Button title="salvar" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
