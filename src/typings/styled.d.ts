// import original module declarations
import 'styled-components';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    // borderColor: string;
    bgColor: string;
    textColor: string;
    // borderRadius: string;
    //
    // colors: {
    //   main: string;
    //   secondary: string;
    // };
    accentColor: string;
  }
}