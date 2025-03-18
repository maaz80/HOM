// File: src/components/Users.jsx
import { useEffect, useState, useMemo } from 'react';
import useDebounce from '../hooks/useDebounce';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const filtered = useMemo(() => {
    const lower = debouncedQuery.toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(lower));
  }, [debouncedQuery, users]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900 text-white" id="users">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Meet Our Users</h2>

      <div className="max-w-2xl mx-auto mb-12">
        <input
          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur text-white border border-white/20 placeholder-white/70 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          placeholder="Search by user name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filtered.map((user) => (
          <li
            key={user.id}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 text-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={`https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(user.name)}`}
                alt={user.name}
                className="w-12 h-12 rounded-full border border-white/30 shadow-sm"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-sm text-white/80">{user.email}</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {user.company?.catchPhrase || 'Dynamic & result-driven individual'}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
