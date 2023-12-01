const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
  {
    serverUrl: "https://sonar-dev.macropay.mx",
    options: {
      "sonar.projectKey": "next14-test",
      "sonar.projectName": "next14-test",
      "sonar.projectVersion": "1.0.1",
      "sonar.sources": "",
      "sonar.tests": "",
      "sonar.exclusions":
        "/styles/**, /constants/**, /server/index.ts,  /interfaces/**, /lang/**, /**/fixture.ts, /**/fixture.tsx, /**/checkSHA.ts, /**/__coverage__.js, /**/LDAP/index.ts",
      "sonar.test.inclusions":
        "/**/*.spec.js,/**/*.spec.jsx,/**/*.test.js,/**/*.test.jsx,server/**/*.spec.js,server/**/*.test.js",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.login": "sqp_e3760c8427556de51fafc08be4b37e04e371983f",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => {
    /* */
  }
);
