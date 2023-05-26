import { defineStore } from 'pinia';
import { getAllProjects } from '../api/projectsApi';
import projectTypeEnum from '../api/projectTypeEnum';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    selectedType: projectTypeEnum.DESIGN,
    items: [],
    project: [],
  }),
  actions: {
    fetchProjects() {
      const projects = getAllProjects();
      this.items = projects;
    },
    setSelectedType(type) {
      if (!Object.keys(projectTypeEnum).includes(type)) {
        throw Error("Unknown type: " + type)
      }

      this.selectedType = type;
    },
    filteredItems() {
      return this.items.filter(item => item.type == this.selectedType);
    }
  },
  getters: {
    getSelectedType: (state) => state.selectedType,
    getItems: (state) => state.items,
  }
});
