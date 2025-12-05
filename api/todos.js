let todos = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({ todos });
  }

  if (req.method === 'POST') {
    const { task } = req.body;
    todos.push(task);
    return res.status(200).json({ message: 'Task added' });
  }

  if (req.method === 'DELETE') {
    const { index } = req.body;
    todos.splice(index, 1);
    return res.status(200).json({ message: 'Task removed' });
  }

  res.status(405).json({ message: 'Method not allowed' });
}
