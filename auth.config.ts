import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },    
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // const isLoggedIn = !!auth?.user;
      // console.log('user',auth?.user)
      // const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      // if (isOnAdmin){
      //   if (isLoggedIn && (auth.user?.email == 'strausslouis95@gmail.com' || auth.user?.email == 'user@nextmail.com')){
      //   return true
      //   }
      //   console.log('long live the liver lover')
      //   return false;
      // }
      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/dashboard', nextUrl));
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;