// https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2024/fall/
const data = [
    {
        CRN: 61162,
        Code: "CSCI 174.001",
        Department: "CSCI",
        Title: "DI: ST: AI, Ethics, & Society",
        Instructors: [{ Username: "svanwart", Name: "Van Wart, Sarah" }],
        Hours: 4,
        Days: "TR",
        StartTime: "2019-05-07T17:20:00Z",
        EndTime: "2019-05-07T19:00:00Z",
        Location: { FullLocation: "RRO 217", Building: "RRO", Room: "217" },
        EnrollmentCurrent: 23,
        EnrollmentMax: 22,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: true,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60199,
        Code: "CSCI 182.001",
        Department: "CSCI",
        Title: "Introduction to Programming: Media Applications",
        Instructors: [{ Username: "awhitley", Name: "Whitley, Adam" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: { FullLocation: "ZEI 203", Building: "ZEI", Room: "203" },
        EnrollmentCurrent: 19,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60520,
        Code: "CSCI 182.002",
        Department: "CSCI",
        Title: "Introduction to Programming: Media Applications",
        Instructors: [{ Username: "awhitley", Name: "Whitley, Adam" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T19:30:00Z",
        EndTime: "2019-05-07T20:45:00Z",
        Location: { FullLocation: "ZEI 203", Building: "ZEI", Room: "203" },
        EnrollmentCurrent: 17,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60434,
        Code: "CSCI 183.001",
        Department: "CSCI",
        Title: "Introduction to Programming: Data Science",
        Instructors: [{ Username: "msarris", Name: "Sarris, Michael" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T15:00:00Z",
        EndTime: "2019-05-07T16:15:00Z",
        Location: { FullLocation: "RRO 211", Building: "RRO", Room: "211" },
        EnrollmentCurrent: 19,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 61156,
        Code: "CSCI 183.002",
        Department: "CSCI",
        Title: "Introduction to Programming: Data Science",
        Instructors: [{ Username: "msarris", Name: "Sarris, Michael" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T16:30:00Z",
        EndTime: "2019-05-07T17:45:00Z",
        Location: { FullLocation: "RRO 211", Building: "RRO", Room: "211" },
        EnrollmentCurrent: 18,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60408,
        Code: "CSCI 185.001",
        Department: "CSCI",
        Title: "Introduction to Programming: Web Development",
        Instructors: [{ Username: "frashid", Name: "Rashid, Farzana" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: { FullLocation: "WHI 008", Building: "WHI", Room: "008" },
        EnrollmentCurrent: 10,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 61157,
        Code: "CSCI 185.002",
        Department: "CSCI",
        Title: "Introduction to Programming: Web Development",
        Instructors: [{ Username: "frashid", Name: "Rashid, Farzana" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T15:00:00Z",
        EndTime: "2019-05-07T16:15:00Z",
        Location: { FullLocation: "WHI 008", Building: "WHI", Room: "008" },
        EnrollmentCurrent: 15,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 61158,
        Code: "CSCI 201.001",
        Department: "CSCI",
        Title: "Intro to Object-Oriented Programming",
        Instructors: [{ Username: "arashid", Name: "Rashid, Zubayr" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: { FullLocation: "ZEI 201", Building: "ZEI", Room: "201" },
        EnrollmentCurrent: 14,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60655,
        Code: "CSCI 201.002",
        Department: "CSCI",
        Title: "Intro to Object-Oriented Programming",
        Instructors: [{ Username: "arashid", Name: "Rashid, Zubayr" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T15:00:00Z",
        EndTime: "2019-05-07T16:15:00Z",
        Location: { FullLocation: "ZEI 201", Building: "ZEI", Room: "201" },
        EnrollmentCurrent: 20,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60200,
        Code: "CSCI 202.001",
        Department: "CSCI",
        Title: "Intro to Data Structures",
        Instructors: [{ Username: "ksanft", Name: "Sanft, Kevin" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: { FullLocation: "ZEI 203", Building: "ZEI", Room: "203" },
        EnrollmentCurrent: 23,
        EnrollmentMax: 24,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60581,
        Code: "CSCI 202.002",
        Department: "CSCI",
        Title: "Intro to Data Structures",
        Instructors: [{ Username: "ksanft", Name: "Sanft, Kevin" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T15:00:00Z",
        EndTime: "2019-05-07T16:15:00Z",
        Location: { FullLocation: "ZEI 203", Building: "ZEI", Room: "203" },
        EnrollmentCurrent: 24,
        EnrollmentMax: 24,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60436,
        Code: "CSCI 235.001",
        Department: "CSCI",
        Title: "Systems I",
        Instructors: [{ Username: "msarris", Name: "Sarris, Michael" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T12:00:00Z",
        EndTime: "2019-05-07T13:15:00Z",
        Location: { FullLocation: "WHI 008", Building: "WHI", Room: "008" },
        EnrollmentCurrent: 30,
        EnrollmentMax: 30,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60811,
        Code: "CSCI 272.001",
        Department: "CSCI",
        Title: "ST: Object-oriented Java Programming Review",
        Instructors: [{ Username: "arashid", Name: "Rashid, Zubayr" }],
        Hours: 2,
        Days: "M",
        StartTime: "2019-05-07T21:30:00Z",
        EndTime: "2019-05-08T00:50:00Z",
        Location: { FullLocation: "RRO 223", Building: "RRO", Room: "223" },
        EnrollmentCurrent: 2,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "L",
        StartDate: "2024-10-09T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60435,
        Code: "CSCI 280.001",
        Department: "CSCI",
        Title: "Computer Science Seminar",
        Instructors: [{ Username: "kbogert", Name: "Bogert, Kenneth" }],
        Hours: 1,
        Days: "M",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: { FullLocation: "RRO 217", Building: "RRO", Room: "217" },
        EnrollmentCurrent: 23,
        EnrollmentMax: 22,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 61159,
        Code: "CSCI 302.001",
        Department: "CSCI",
        Title: "Theory of Computation",
        Instructors: [{ Username: "frashid", Name: "Rashid, Farzana" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T16:30:00Z",
        EndTime: "2019-05-07T17:45:00Z",
        Location: { FullLocation: "ZEI 201", Building: "ZEI", Room: "201" },
        EnrollmentCurrent: 13,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60201,
        Code: "CSCI 333.001",
        Department: "CSCI",
        Title: "Algorithms",
        Instructors: [{ Username: "awhitley", Name: "Whitley, Adam" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T16:30:00Z",
        EndTime: "2019-05-07T17:45:00Z",
        Location: { FullLocation: "ZEI 203", Building: "ZEI", Room: "203" },
        EnrollmentCurrent: 22,
        EnrollmentMax: 24,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60437,
        Code: "CSCI 335.001",
        Department: "CSCI",
        Title: "Systems II",
        Instructors: [{ Username: "ksanft", Name: "Sanft, Kevin" }],
        Hours: 3,
        Days: "TR",
        StartTime: "2019-05-07T17:20:00Z",
        EndTime: "2019-05-07T19:00:00Z",
        Location: { FullLocation: "RRO 223", Building: "RRO", Room: "223" },
        EnrollmentCurrent: 14,
        EnrollmentMax: 18,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60462,
        Code: "CSCI 338.001",
        Department: "CSCI",
        Title: "Software Engineering",
        Instructors: [{ Username: "svanwart", Name: "Van Wart, Sarah" }],
        Hours: 3,
        Days: "TR",
        StartTime: "2019-05-07T13:55:00Z",
        EndTime: "2019-05-07T15:35:00Z",
        Location: { FullLocation: "ZEI 203", Building: "ZEI", Room: "203" },
        EnrollmentCurrent: 18,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60739,
        Code: "CSCI 343.001",
        Department: "CSCI",
        Title: "Database Management Systems",
        Instructors: [{ Username: "kbogert", Name: "Bogert, Kenneth" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T19:30:00Z",
        EndTime: "2019-05-07T20:45:00Z",
        Location: { FullLocation: "RRO 217", Building: "RRO", Room: "217" },
        EnrollmentCurrent: 28,
        EnrollmentMax: 27,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: false,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 61160,
        Code: "CSCI 344.001",
        Department: "CSCI",
        Title: "Advanced Web Technology",
        Instructors: [{ Username: "svanwart", Name: "Van Wart, Sarah" }],
        Hours: 3,
        Days: "MWF",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: { FullLocation: "ZEI 201", Building: "ZEI", Room: "201" },
        EnrollmentCurrent: 23,
        EnrollmentMax: 24,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60812,
        Code: "CSCI 372.001",
        Department: "CSCI",
        Title: "ST: Cybersecurity and Programming Competitions",
        Instructors: [{ Username: "arashid", Name: "Rashid, Zubayr" }],
        Hours: 2,
        Days: "M",
        StartTime: "2019-05-07T21:30:00Z",
        EndTime: "2019-05-08T00:50:00Z",
        Location: { FullLocation: "ZEI 201", Building: "ZEI", Room: "201" },
        EnrollmentCurrent: 16,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "F",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-10-04T04:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60463,
        Code: "CSCI 480.001",
        Department: "CSCI",
        Title: "Capstone I",
        Instructors: [{ Username: "kbogert", Name: "Bogert, Kenneth" }],
        Hours: 2,
        Days: "MF",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: { FullLocation: "RRO 217", Building: "RRO", Room: "217" },
        EnrollmentCurrent: 5,
        EnrollmentMax: 15,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60656,
        Code: "CSCI 480.002",
        Department: "CSCI",
        Title: "Capstone I",
        Instructors: [{ Username: "kbogert", Name: "Bogert, Kenneth" }],
        Hours: 2,
        Days: "WF",
        StartTime: "2019-05-07T18:00:00Z",
        EndTime: "2019-05-07T19:15:00Z",
        Location: { FullLocation: "RRO 217", Building: "RRO", Room: "217" },
        EnrollmentCurrent: 13,
        EnrollmentMax: 15,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
    {
        CRN: 60464,
        Code: "CSCI 481.001",
        Department: "CSCI",
        Title: "Capstone II",
        Instructors: [{ Username: "kbogert", Name: "Bogert, Kenneth" }],
        Hours: 2,
        Days: "WF",
        StartTime: "2019-05-07T13:30:00Z",
        EndTime: "2019-05-07T14:45:00Z",
        Location: { FullLocation: "RRO 217", Building: "RRO", Room: "217" },
        EnrollmentCurrent: 10,
        EnrollmentMax: 20,
        WaitlistMax: 0,
        WaitlistAvailable: 0,
        TermPart: "1",
        StartDate: "2024-08-19T04:00:00Z",
        EndDate: "2024-12-11T05:00:00Z",
        Classification: {
            DiversityIntensive: false,
            DiversityIntensiveR: false,
            DistanceLearning: false,
            FirstYearSeminar: false,
            Graduate: false,
            Honors: false,
            Arts: false,
            ServiceLearning: false,
            Open: true,
        },
        AdditionalMeetings: [],
        InstructionalMethod: "In-Person",
        Async: false,
    },
];
