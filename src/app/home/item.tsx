import {
  AiOutlineDashboard,
  AiOutlineSetting,
  AiOutlinePullRequest,
} from "react-icons/ai";

export const items=[
    {
      key: "/",
      icon: <AiOutlineDashboard className="fs-4" />,
      label: "Dashboard",
    },
    {
      key: "sm",
      icon: <AiOutlineSetting className="fs-4" />,
      label: "Balance",
      children: [
        {
          key: "/home/duties",
          icon: <AiOutlinePullRequest className="fs-4" />,
          label: "Annual Duties",
        },
        {
          key: "/home/balance",
          icon: <AiOutlinePullRequest className="fs-4" />,
          label: "New Balance",
        },
        {
          key: "/home/balance/list",
          icon: <AiOutlinePullRequest className="fs-4" />,
          label: "Balance's list",
        },
      ]
    }
  ]