export function getTechIcon(skill: string): string | null {
  const s = skill.toLowerCase();
  if (s.includes("react"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
  if (s.includes("next"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
  if (s.includes("vue"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg";
  if (s.includes("typescript"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg";
  if (s.includes("javascript"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
  if (s.includes("html"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
  if (s.includes("css"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
  if (s.includes("node"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
  if (s.includes("express"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
  if (s.includes("php"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg";
  if (s.includes("tailwind"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg";
  if (s.includes("scss"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg";
  if (s.includes("git"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
  if (s.includes("docker"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg";
  if (s.includes("jenkins"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg";
  if (s.includes("figma"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg";
  if (s.includes("mysql"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";
  if (s.includes("firebase"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg";
  if (s.includes("jest"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg";
  if (s.includes("redux"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg";
  if (s.includes("material ui"))
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg";
  if (s.includes("ant design"))
    return "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
  return null;
}
