import NextAuth from "next-auth"
import Providers from "next-auth/providers"


// Configurações para a autenticação com o Google
export default NextAuth({
  providers: [
    Providers.Google({
      clientId: '88798663232-qv7khnnvksdk8blhts2ph5h74ca5asp9.apps.googleusercontent.com',
      clientSecret: 'oBPtXQIhro2stBwMqboeMBe4',
      authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    }),
  ],
})