import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Sidebar from '../../components/Schedule/Sidebar.jsx';
import Month from '../../components/Schedule/Month.jsx';
import GlobalContext from '../../context/GlobalContext.jsx';
import { getMonth } from '../../util.js';
import CalendarHeader from '../../components/Schedule/CalendarHeader.jsx';
import EventModal from '../../components/Schedule/EventModal.jsx';

export default function Schedule() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const { isLoggedIn, isLoading } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    isLoading: state.auth.isLoading,
  }));

  // Handle task creation
  const handleCreateTask = (task) => {
    if (!task.nomeTarefa || !task.date || !task.time) {
      toast.warn('Preencha todos os campos para criar a tarefa!');
      return;
    }
    if (editingTask !== null) {
      const updatedTasks = tasks.map((t, index) => index === editingTask ? task : t);
      setTasks(updatedTasks);
    } else {
      setTasks(prevTasks => [...prevTasks, task]);
    }
  };
  const handleEditTask = (index) => {
    setEditingTask(index);
    setOpenModal(true);
  };
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setOpenModal(false);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:text-white">
        <main>
          <React.Fragment>
            {showEventModal && <EventModal />}

            <div className="h-sreen flex-columns">
              <CalendarHeader />
              <div className="flex flex-1">
                <Sidebar />
                <Month month={currentMonth} />
              </div>
            </div>
          </React.Fragment>
        </main>
      </div>
    </>
  );
}
