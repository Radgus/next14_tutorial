const sonarqubeScanner = require("sonarqube-scanner");

sonarqubeScanner(
  {
    serverUrl: "",
    options: {
      "sonar.projectKey": "next14-test",
      "sonar.projectName": "next14-test",
      "sonar.projectVersion": "1.0.1",
      "sonar.sources": "app",
      "sonar.tests": "app",
      "sonar.exclusions":
        "app/styles/**, app/constants/**, app/server/index.ts,  app/interfaces/**, app/lang/**, app/**/fixture.ts, app/**/fixture.tsx, app/**/checkSHA.ts, app/**/__coverage__.js, app/**/LDAP/index.ts",
      "sonar.test.inclusions":
        "app/**/*.spec.js,app/**/*.spec.jsx,app/**/*.test.js,app/**/*.test.jsx,server/**/*.spec.js,server/**/*.test.js",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.login": "",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => {
    /* */
  }
);
