
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <>
    {menuItems.map((item) => 
    <span>{item.title}</span>
    )}
    </>
  )
}

export default Sidebar