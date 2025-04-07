import { useState } from "react";

const ProjectTracking = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Smartphone X",
      milestones: [
        { title: "Design Approved", completed: true },
        { title: "Prototype Built", completed: false },
        { title: "Final Delivery", completed: false },
      ],
      issues: [],
    },
  ]);

  const [newIssue, setNewIssue] = useState("");

  const reportIssue = (projectId) => {
    if (!newIssue.trim()) return;
    const updated = projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            issues: [...project.issues, { id: Date.now(), text: newIssue }],
          }
        : project
    );
    setNewIssue("");
    // Simulate state update
    console.log("Reported issue:", updated);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Project Tracking</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className="border p-4 mb-4 rounded shadow bg-gray-50"
        >
          <h3 className="font-bold text-lg">{project.name}</h3>

          <h4 className="mt-3 font-medium">Milestones</h4>
          <ul className="list-disc pl-5 mb-2">
            {project.milestones.map((m, idx) => (
              <li
                key={idx}
                className={m.completed ? "text-green-600" : "text-gray-600"}
              >
                {m.title} {m.completed && "✓"}
              </li>
            ))}
          </ul>

          <h4 className="mt-4 font-medium">Report an Issue</h4>
          <div className="flex gap-2 items-center mb-2">
            <input
              value={newIssue}
              onChange={(e) => setNewIssue(e.target.value)}
              placeholder="Describe your issue..."
              className="flex-grow p-2 border rounded"
            />
            <button
              onClick={() => reportIssue(project.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Submit
            </button>
          </div>

          <h4 className="font-medium">Reported Issues</h4>
          <ul className="pl-5 list-disc text-sm">
            {project.issues.length === 0 ? (
              <li className="text-gray-500">No issues reported.</li>
            ) : (
              project.issues.map((issue) => (
                <li key={issue.id}>{issue.text}</li>
              ))
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectTracking;
