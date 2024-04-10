class Tarefa():
    def __init__(self, tarefa, horario):
        self._tarefa = tarefa
        self._horario = horario

    @property
    def tarefa(self):
        return self._tarefa

    @tarefa.setter
    def tarefa(self, tarefa):
        self._tarefa = tarefa

    @property
    def horario(self):
        return self._horario

    @horario.setter
    def horario(self, horario):
        self._horario = horario


class Agenda:
    def __init__(self):
        self._tarefas = []

    def adicionar_na_agenda(self, *tarefas):
        for i, tarefa in enumerate(tarefas):
            self._tarefas.append(self._tarefas[i])


    def mostrar_agenda(self):
        for tarefa in self._tarefas:
            print(tarefa)

agenda = Agenda()
t1 = Tarefa('Fazer arroz', 12)

agenda.adicionar_na_agenda(t1)

agenda.mostrar_agenda()
