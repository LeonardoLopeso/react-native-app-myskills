import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

interface IProps {
  skill: string;
}

export function SkillCard({ skill }: IProps ) {
  return(
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
})